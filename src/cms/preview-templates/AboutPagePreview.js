import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
  <AboutPageTemplate
  title={data.title}
  howitallstarted={data.howitallstarted || {}}
  mission={data.mission || {}}
  vision={data.vision || {}}
  values={data.values || {}}
  />
)
} else {
  return <div>Loading...</div>
}
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
