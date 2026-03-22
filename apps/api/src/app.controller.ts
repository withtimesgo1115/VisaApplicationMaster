import { Controller, Get, Header } from '@nestjs/common';
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
}
