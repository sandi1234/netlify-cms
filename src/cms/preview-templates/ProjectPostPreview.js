import React from 'react'
import PropTypes from 'prop-types'
import { ProjectPostTemplate } from '../../templates/project-post'

const ProjectPostPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  // const tags = entry.getIn(['data', 'tags'])

  if (data) {

  return (
    <ProjectPostTemplate
      description={data.description}
      // date={data.date}
      // tags={tags && tags.toJS()}
      title={data.title}
      // content={data.content || {}}
    />
  )
} else {
  return <div>Loading...</div>
}
}

ProjectPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjectPostPreview
