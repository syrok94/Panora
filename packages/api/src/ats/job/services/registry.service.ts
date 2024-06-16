import { Injectable } from '@nestjs/common';
import { IJobService } from '../types';

@Injectable()
export class ServiceRegistry {
  private serviceMap: Map<string, IJobService>;

  constructor() {
    this.serviceMap = new Map<string, IJobService>();
  }

  registerService(serviceKey: string, service: IJobService) {
    this.serviceMap.set(serviceKey, service);
  }

  getService(integrationId: string): IJobService {
    const service = this.serviceMap.get(integrationId);
    if (!service) {
      throw new ReferenceError(`Service not found for integration ID: ${integrationId}`);
    }
    return service;
  }
}
EOF 

    cat > "services/job.service.ts" <<EOF
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@@core/prisma/prisma.service';
import { LoggerService } from '@@core/logger/logger.service';
import { v4 as uuidv4 } from 'uuid';
import { ApiResponse } from '@@core/utils/types';
import { throwTypedError, UnifiedAtsError } from '@@core/utils/errors';
import { WebhookService } from '@@core/webhook/webhook.service';
import { UnifiedJobInput, UnifiedJobOutput } from '../types/model.unified';
import { desunify } from '@@core/utils/unification/desunify';
import { FieldMappingService } from '@@core/field-mapping/field-mapping.service';
import { ServiceRegistry } from './registry.service';
import { OriginalJobOutput } from '@@core/utils/types/original/original.ats';
import { unify } from '@@core/utils/unification/unify';
import { IJobService } from '../types';

@Injectable()
export class JobService {
  constructor(
    private prisma: PrismaService,
    private logger: LoggerService,
    private webhook: WebhookService,
    private fieldMappingService: FieldMappingService,
    private serviceRegistry: ServiceRegistry,
  ) {
    this.logger.setContext(JobService.name);
  }

  async batchAddJobs(
    unifiedJobData: UnifiedJobInput[],
    integrationId: string,
    linkedUserId: string,
    remote_data?: boolean,
  ): Promise<UnifiedJobOutput[]> {
    return;
  }

  async addJob(
    unifiedJobData: UnifiedJobInput,
    integrationId: string,
    linkedUserId: string,
    remote_data?: boolean,
  ): Promise<UnifiedJobOutput> {
        return;
  }

  async getJob(
    id_jobing_job: string,
    remote_data?: boolean,
  ): Promise<UnifiedJobOutput> {
       return;

  }


  async getJobs(
    integrationId: string,
    linkedUserId: string,
    remote_data?: boolean,
  ): Promise<UnifiedJobOutput[]> {
       return;

  }
}
