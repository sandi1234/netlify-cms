import React from 'react'
import PropTypes from 'prop-types'
import { ProjectPostTemplate } from '../../templates/project-post'

const ProjectPostPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
  <ProjectPostTemplate
  title={data.title}
  description={data.description}
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
