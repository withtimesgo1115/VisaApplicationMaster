import { Controller, Get, Header, Param } from '@nestjs/common';
import {
  getChecklistCss,
  getChecklistHtml,
  getChecklistJs
} from './ops-dashboard/checklist-page';
import {
  getOpsDashboardCss,
  getOpsDashboardHtml,
  getOpsDashboardJs
} from './ops-dashboard/ops-page';

@Controller()
export class AppController {
  @Get()
  @Header('Content-Type', 'text/html; charset=utf-8')
  home() {
    return getOpsDashboardHtml();
  }

  @Get('health')
  health() {
    return { status: 'ok' };
  }

  @Get('ops')
  @Header('Content-Type', 'text/html; charset=utf-8')
  opsDashboard() {
    return getOpsDashboardHtml();
  }

  @Get('visa/:countryId')
  @Header('Content-Type', 'text/html; charset=utf-8')
  visaChecklist(@Param('countryId') _countryId: string) {
    return getChecklistHtml();
  }

  @Get('app/styles.css')
  @Header('Content-Type', 'text/css; charset=utf-8')
  opsStyles() {
    return getOpsDashboardCss();
  }

  @Get('app/app.js')
  @Header('Content-Type', 'application/javascript; charset=utf-8')
  opsScript() {
    return getOpsDashboardJs();
  }

  @Get('app/checklist.css')
  @Header('Content-Type', 'text/css; charset=utf-8')
  checklistStyles() {
    return getChecklistCss();
  }

  @Get('app/checklist.js')
  @Header('Content-Type', 'application/javascript; charset=utf-8')
  checklistScript() {
    return getChecklistJs();
  }
}
