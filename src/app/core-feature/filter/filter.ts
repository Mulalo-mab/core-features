import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { FilterService } from '../filter/filter-service';


ModuleRegistry.registerModules([AllCommunityModule]);


@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {

  private gridApi!: GridApi;
  rowData: any[] = [];

  columnDefs: ColDef[] = [
    { field: 'athlete', sortable: true, filter: 'agTextColumnFilter', editable: true },
    { field: 'age', sortable: true, filter: 'agNumberColumnFilter' },
    { field: 'country', sortable: true, filter: 'agTextColumnFilter' },
    { field: 'year', sortable: true, filter: 'agNumberColumnFilter', floatingFilter: false },
    { field: 'sport', sortable: true, filter: false },
 
  ];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
    floatingFilter: true,
    suppressHeaderMenuButton: true,
  };

  gridOptions = {
    theme: 'legacy' as any,
    onGridReady: (params: any) => this.onGridReady(params)
  };

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.loadData();

  };

  loadData(): void {
    this.filterService.getOlympicAthletes().subscribe({
      next: (data) => {
        console.log('Data received in component:', data);
        this.rowData = data;
        // CRITICAL: Update the grid with the new data
        if (this.gridApi) {
          console.log('Setting rowData on gridApi');
          this.gridApi.setGridOption('rowData', this.rowData);
        }
      },
      error: (error) => {
        console.error('Error loading data:', error);
      }
    });
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    console.log('Grid ready, current rowData length:', this.rowData.length);

    // If data is already loaded, set it on the grid
    if (this.rowData && this.rowData.length > 0) {
      console.log('Data already loaded, setting on grid');
      this.gridApi.setGridOption('rowData', this.rowData);
    } else {
      console.log('Data not loaded yet, grid will show empty');
    }
  }

}
