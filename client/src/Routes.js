import { Switch, Route } from 'react-router-dom'
import Grid from './Pages/Grid/Grid'
import Reporte from './Pages/Reporte/Reporte'
import Vista from './Pages/Reporte/Vista'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Reporte} />
            <Route exact path="/grid" component={Grid} />
            <Route exact path="/reporte" component={Reporte} />
            <Route exact path="/vista" component={Vista} />
        </Switch>
    );
}

export default Routes;