import {Component} from '@angular/core';

@Component({
    selector: 'recycle-multi-sortable',
    template: `
<h4>Simple sortable With Drop into recycle bin</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-success">
            <div class="panel-heading">
                Favorite drinks
            </div>
            <div class="panel-body" dnd-sortable-container [sortableData]="listOne" [dropZones]="['delete-dropZone']">
                <ul class="list-group">
                    <li *ngFor="let item of listOne; let i = index" class="list-group-item"
                    dnd-sortable [sortableIndex]="i">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="panel panel-default">
            <div class="panel-body" dnd-sortable-container [dropZones]="['delete-dropZone']" [sortableData]="listRecycled">
                Recycle bin: Drag into me to delete it<br/>
                <!--ul class="list-group" >
                    <li *ngFor="let item of listRecycled; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">{{item}}</li>
                </ul-->
            </div>
        </div>
        <div *ngIf="listRecycled.length">
        <b>Recycled:</b> <span>{{listRecycled.toString()}} </span>
        </div>
    </div>
</div>`
})
export class RecycleMultiSortableComponent {
    listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
    listRecycled: Array<string> = [];
}