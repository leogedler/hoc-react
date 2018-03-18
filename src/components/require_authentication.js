import React, { Component } from 'react';
import { connect } from 'react-redux';



export default function(ComposedComponent) {
    class Authentication extends Component{
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount(){
            if(!this.props.authenticated) this.context.router.history.push('/');
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated) this.context.router.history.push('/');
        }

        render(){
            console.log('context', this.context);
            return <ComposedComponent {...this.props}></ComposedComponent>
        }
    }

    function mapStateToProps({authenticated}){
        return { authenticated }
    }

    return connect(mapStateToProps)(Authentication);
}