import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { popIn } from '../services/prebuilt-group-animations.service'

const myProjects = [{
	name: 'Watermalon',
	description: 'lorem ipsum dolor sit amet.',
}, {
	name: 'Watermalon',
	description: 'lorem ipsum dolor sit amet.',
}, {
	name: 'Watermalon',
	description: 'lorem ipsum dolor sit amet.',
}, {
	name: 'Watermalon',
	description: 'lorem ipsum dolor sit amet.',
}, {
	name: 'Watermalon',
	description: 'lorem ipsum dolor sit amet.',
}, {
	name: 'Watermalon',
	description: 'lorem ipsum dolor sit amet.',
}, {
	name: 'Watermalon',
	description: 'lorem ipsum dolor sit amet.',
}, {
	name: 'Watermalon',
	description: 'lorem ipsum dolor sit amet.',
}, {
	name: 'Watermalon',
	description: 'lorem ipsum dolor sit amet.',
}, {
	name: 'Watermalon',
	description: 'lorem ipsum dolor sit amet.',
}]

class Projects extends React.Component {

	constructor(props) {
		super(props)
		this.projectRefs = []
	}

	componentDidMount() {
		popIn(this.projectRefs)
	}

	render() {
		return (
			<Layout>
				<SEO title="Projects" />
				<h1>Projects</h1>
				<hr/>
				<p>Alguns projetos pessoais</p>
				<section style={{
					display: 'flex',
					maxWidth: 920,
					flexFlow: 'row wrap',
					justifyContent: 'flex-center',
				}}>
					{
						myProjects.map((p, i) => (
							<article ref={element => {
								this.projectRefs[i] = element
							}} style={{
								flex: 2,
								minWidth: 250,
								textAlign: "center",
								background: '#eee',
								margin: 8,
								padding: '16px 2px',
								borderRadius: 8,
								boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
								color: '#333'
							}} key={ i.toString() }>
								<h4>
									{p.name}
								</h4>
								<small>
									{p.description}
								</small>
							</article>
						))
					}
				</section>
				<p style={{
					textAlign: "right",
					margin: 8
				}}>
					<small>
						veja mais {` `}
						<a href="https://github.com/erickvieira">
							no meu GitHub
				</a>
					</small>
				</p>
			</Layout>
		)
	}

}

export default Projects