var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";

class CeilingLights {
    constructor() {
        this.onTick = this.onTick.bind(this);
    }
    onTick(args) {
        const { block } = args;
        const blockAbove = block.above();
        if (!blockAbove || blockAbove.typeId === "minecraft:air") {
            const { x, y, z } = block.location;
            block.dimension.runCommand(`setblock ${x} ${y} ${z} air destroy`);
        }
    }
}

export class CeilingLightstRegister {
    register(args) {
        args.blockComponentRegistry.registerCustomComponent('nightlights:is_needs_support', new CeilingLights());
    }
}

__decorate([
    EventAPI.register(world.beforeEvents.worldInitialize),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CeilingLightstRegister.prototype, "register", null);