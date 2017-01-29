import {Component} from '@angular/core';

@Component({
    selector: 'custom-data-dnd',
    template: `
<h4>Transfer custom data in Drag-and-Drop</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-success">
            <div class="panel-heading">Available to drag</div>
            <div class="panel-body">
                <div class="panel panel-default" dnd-draggable [dragEnabled]="true" [dragData]="transferData">
                    <div class="panel-body">
                        <div>Drag Me</div>
                        <div>{{transferData | json}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable class="panel panel-info" (onDropSuccess)="transferDataSuccess($event)">
            <div class="panel-heading">Place to drop (Items:{{receivedData.length}})</div>
            <div class="panel-body">
                <div [hidden]="!receivedData.length > 0" *ngFor="let data of receivedData">{{data | json}}</div>
            </div>
        </div>
    </div>
</div>`
})
export class CustomDataDndComponent {
    transferData: Object = {id: 1, msg: 'Hello'};
    receivedData: Array<any> = [];

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
    }
}