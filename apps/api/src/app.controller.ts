import { Controller, Get, Header } from '@nestjs/common';
import {
  getOpsDashboardCss,
  getOpsDashboardHtml,
  getOpsDashboardJs
} from './ops-dashboard/ops-page';

@Controller()
export class AppController {
  @Get('health')
  health() {
    return { status: 'ok' };
  }

  @Get('ops')
  @Header('Content-Type', 'text/html; charset=utf-8')
  opsDashboard() {
    return getOpsDashboardHtml();
  }

  @Get('ops/styles.css')
  @Header('Content-Type', 'text/css; charset=utf-8')
  opsStyles() {
    return getOpsDashboardCss();
  }

  @Get('ops/app.js')
  @Header('Content-Type', 'application/javascript; charset=utf-8')
  opsScript() {
    return getOpsDashboardJs();
  }
}
