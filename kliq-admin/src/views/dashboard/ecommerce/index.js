
// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import InvoiceList from '@src/views/apps/invoice/list'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col xs='12'>
          <InvoiceList />
        </Col>
      </Row>
    </div>
  )
}

export default EcommerceDashboard
