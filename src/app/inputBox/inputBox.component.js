"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { IdeasService } from '../ideas.service/ideas.service';
var InputBoxComponent = (function () {
    function InputBoxComponent() {
        this.ideas = ["Djurke, Gaco..."];
    }
    InputBoxComponent.prototype.addIdea = function (newIdea) {
        if (newIdea) {
            this.ideas.unshift(newIdea);
        }
    };
    InputBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'input-box',
            templateUrl: 'inputBox.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], InputBoxComponent);
    return InputBoxComponent;
}());
exports.InputBoxComponent = InputBoxComponent;
//# sourceMappingURL=inputBox.component.js.map