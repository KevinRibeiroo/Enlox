import ContentLoader from 'react-content-loader'
import React from "react"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#999999"
    foregroundColor="#f2b854"
    {...props}
  >
    <rect x="295" y="14" rx="3" ry="3" width="88" height="12" /> 
    <rect x="10" y="5" rx="3" ry="3" width="115" height="58" /> 
    <rect x="295" y="37" rx="3" ry="3" width="88" height="12" /> 
    <rect x="170" y="11" rx="0" ry="0" width="74" height="35" /> 
    <rect x="12" y="76" rx="0" ry="0" width="109" height="10" />
  </ContentLoader>
)

export { Loader };