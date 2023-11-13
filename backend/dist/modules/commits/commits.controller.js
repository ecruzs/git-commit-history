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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitsController = void 0;
const common_1 = require("@nestjs/common");
const commits_service_1 = require("./commits.service");
let CommitsController = class CommitsController {
    constructor(githubService) {
        this.githubService = githubService;
    }
    async getCommits(params) {
        const repo = params[0];
        return this.githubService.getCommits(repo);
    }
};
exports.CommitsController = CommitsController;
__decorate([
    (0, common_1.Get)('*'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommitsController.prototype, "getCommits", null);
exports.CommitsController = CommitsController = __decorate([
    (0, common_1.Controller)('commits'),
    __metadata("design:paramtypes", [commits_service_1.CommitsService])
], CommitsController);
//# sourceMappingURL=commits.controller.js.map