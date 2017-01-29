import {Component} from '@angular/core';

@Component({
    selector: 'simple-dnd',
    template: `
<h4>Simple Drag-and-Drop</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-success">
            <div class="panel-heading">Available to drag</div>
            <div class="panel-body">
                <div class="panel panel-default" dnd-draggable [dragEnabled]="true">
                    <div class="panel-body">
                        <div>Drag Me</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable class="panel panel-info" (onDropSuccess)="simpleDrop=$event">
            <div class="panel-heading">Place to drop</div>
            <div class="panel-body">
                <div *ngIf="simpleDrop">Item was dropped here</div>
            </div>
        </div>
    </div>
</div>`
})
export class SimpleDndComponent {
    simpleDrop: any = null;
}