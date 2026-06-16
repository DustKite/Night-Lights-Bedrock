var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { world, PlayerInteractWithBlockAfterEvent } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
export class NightLights {
    use(args) {
        const block = args.block;
        if (!block.hasTag("nightlights:is_adjustable")) {
            return;
        }
        const player = args.player;
        const state = block.permutation.getState('nightlights:brightness_level');
        player.playSound("random.wood_click", block.location);
        block.setPermutation(block.permutation.withState('nightlights:brightness_level', state + 1));
    }
}
__decorate([
    EventAPI.register(world.afterEvents.playerInteractWithBlock),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PlayerInteractWithBlockAfterEvent]),
    __metadata("design:returntype", void 0)
], NightLights.prototype, "use", null);