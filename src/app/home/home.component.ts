import { Component, OnInit } from '@angular/core';

import { ModalService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    private bodyText: string;
     private shelveNos: number;
 shelvesList=[];
generatedList=[];
list = [];
    constructor(private modalService: ModalService) {
    }

    ngOnInit() {
        this.bodyText = 'This text can be updated in modal 1';
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
    addShelves () {
          this.shelvesList.length=0;
this.generatedList.length=0;
          //Creating shelves for first screen which is a popup
          for (let i = 1; i <= this.shelveNos; i++) {
            var shelfObj = {
              "shelf": i,
              "rows": "",
              "columns": ""
            }
            this.list.push(shelfObj);
          }
          //Copying local variable to scope variable
          this.shelvesList = this.list;
        }
        generateTable(id) {
          this.generatedList = this.shelvesList.slice();
          //$uibModalInstance.dismiss('cancel');
this.modalService.close(id);
        }
        range (input) {
          var num = parseInt(input);
          return new Array(num);
        };
}