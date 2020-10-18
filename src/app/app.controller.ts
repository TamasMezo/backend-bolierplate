import { ApiInfo, ApiOperation, controller, Get, Hook, HttpResponseNotFound, HttpResponseOK, render } from '@foal/core';
import { ApiController } from './controllers';

@ApiInfo({
  title: 'Backend ClubSpot',
  version: '0.0.1',
})
@Hook(() => response => {
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Cookie');
})
export class AppController {
  subControllers = [controller('/graphql', ApiController)];
  @Get('/')
  index() {
    return new HttpResponseOK('Hello world!');
  }

  @Get('/graphiql')
  @ApiOperation({
    summary: 'graphql sandbox',
    description: 'GraphQL sandbox web page where supported entities, queries and mutations can be explored',
    responses: {},
  })
  graphiql() {
    if (process.env.NODE_ENV === 'prod') {
      return new HttpResponseNotFound();
    }
    return render('../app/graphql/graphiql.html', {}, __dirname);
  }
}
