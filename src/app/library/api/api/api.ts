export * from './area.service';
import { AreaService } from './area.service';
export * from './election.service';
import { ElectionService } from './election.service';
export * from './mandats.service';
import { MandatsService } from './mandats.service';
export * from './result.service';
import { ResultService } from './result.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [AreaService, ElectionService, MandatsService, ResultService, UserService];
