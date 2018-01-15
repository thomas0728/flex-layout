/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {NgModule} from '@angular/core';

import {SERVER_PROVIDER} from './server-provider';
import {ServerStylesheet} from '../utils/styling/server-stylesheet';

@NgModule({
  providers: [ServerStylesheet, SERVER_PROVIDER]
})
export class FlexLayoutServerModule {}