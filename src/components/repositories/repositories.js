import React from "react";
import jsonFetch from "simple-json-fetch";
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'

import Loader from '../loader'

const endpoint =
  `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated`


class Repositories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      status: 'loading'
    }
  }
  async componentDidMount () {
    const repos = await jsonFetch(endpoint);
    if (repos.json && repos.json.length) {
      this.setState({ repos: repos.json, status: 'ready' })
    }
  }
  render () {
    const { status } = this.state
    return (
      <div className={this.props.className}>
        <h2>Dernier projet sur Github</h2>
        <hr/>
        {status === "loading" && <div className='repositories__loader'><Loader /></div>}
        {status === "ready" &&
          this.state.repos && (
            <React.Fragment>
              <div className="repositories__content">
                {this.state.repos.map(repo => (
                  <React.Fragment key={repo.name}>
                    <div className="repositories__repo">
                      <a className='repositories__repo-link' href={repo.html_url} target="_blank">
                        <strong>{repo.name}</strong>
                      </a>
                      <div className="repositories__desc">{repo.description}</div>
                      <div className="repositories__repo-date">
                        Updated: {new Date(repo.updated_at).toUTCString()}
                      </div>
                      <div className="repositories__repo-star">
                        ★ {repo.stargazers_count}
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          )}
      </div>
    )
  }
}

export default styled(Repositories)`
  position: relative;
  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
    color:grey;
    border: 1px solid grey;
    padding: 1rem;
    border-radius: 1rem;
    margin: 2rem;
  }

  .repositories__desc {
    font-size: .5rem;
    color: white;
  }

  .repositories__repo-link {
    text-decoration: none;
    color: orange;
    font-size: 1rem;
  }

  .repositories__repo-date {
    color: #bbb;
    font-style: italic;
    font-size: .5rem;
  }

  .repositories__repo-star {
    position: absolute;
    top: 0;
    right: 0;
    color: orange;
    margin-right: 1rem;
    margin-top: 1rem;
  }

  .repositories__loader {
    display: flex;

  }

`

