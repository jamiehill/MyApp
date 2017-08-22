import React, { Component } from 'react'
import { observer } from 'mobx-react'

/**
 * Observer function / decorator
 */
export const presenter = (Presenter, View) => {
  // stateless component
  if (Presenter && View) {
    const ViewComp = observer(View)
    class WrappedView extends Component {
      static View = View;
      constructor (props) {
        super(props)

        const prps = Object.assign({}, View.defaultProps, props)
        this.pm = props.pm || new Presenter(prps, this)

        this.pm._hoc = !props.pm
        this.view = View
      }

      componentDidMount () {
        this.pm.fetch && this.pm.fetch()
      }

      componentWillReceiveProps (next) {
        this.pm.update && this.pm.update(next)
      }

      componentWillUnmount () {
        this.pm.dispose && this.pm.dispose()
      }

      render () {
        return (<ViewComp
          {...this.props}
          pm={this.pm}
        />)
      }
    }
    return WrappedView
  }

  // invoked as a decorator
  return componentClass => presenter(Presenter, componentClass)
}
