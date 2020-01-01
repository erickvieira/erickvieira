import React from 'react'
import Layout from 'components/layout/layout'
import SEO from '../components/seo/seo';
import { StorageContext, appStorage } from '../contexts/storage/storage.context';

const propTypes = {};

const defaultProps = {};

export default class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<StorageContext.Provider value={ appStorage }>
				<Layout>
					<SEO title="Blog" keywords="blog"/>
				</Layout>
			</StorageContext.Provider>
		);
	}
}

Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;