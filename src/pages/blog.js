import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout/layout'
import SEO from '../components/seo/seo';

const propTypes = {};

const defaultProps = {};

export default class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Layout>
				<SEO title="Blog" keywords="blog"/>
			</Layout>
		);
	}
}

Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;