import {Component} from '@angular/core';

@Component({
    selector: 'zone-dnd',
    template: `
<h4>Restricted Drag-and-Drop with zones</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-primary">
            <div class="panel-heading">Available to drag</div>
            <div class="panel-body">
                <div class="panel panel-default" dnd-draggable [dragEnabled]="true" [dropZones]="['zone1']">
                    <div class="panel-body">
                        <div>Drag Me</div>
                        <div>Zone 1 only</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel panel-success">
            <div class="panel-heading">Available to drag</div>
            <div class="panel-body">
                <div class="panel panel-default" dnd-draggable [dragEnabled]="true" [dropZones]="['zone1', 'zone2']">
                    <div class="panel-body">
                        <div>Drag Me</div>
                        <div>Zone 1 & 2</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable class="panel panel-info" [dropZones]="['zone1']" (onDropSuccess)="restrictedDrop1=$event">
            <div class="panel-heading">Zone 1</div>
            <div class="panel-body">
                <div *ngIf="restrictedDrop1">Item was dropped here</div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable class="panel panel-warning" [dropZones]="['zone2']" (onDropSuccess)="restrictedDrop2=$event">
            <div class="panel-heading">Zone 2</div>
            <div class="panel-body">
                <div *ngIf="restrictedDrop2">Item was dropped here</div>
            </div>
        </div>
    </div>
</div>`
})
export class ZoneDndComponent {
    restrictedDrop1: any = null;
    restrictedDrop2: any = null;
}