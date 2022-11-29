import './featurecard.css'

function FeatureCard({to, src, featureName}) {
  return (
    <a href={to} className='fc-container'>
        <img className='fc-image' src={src}/>
        <div className="text">
            {featureName}
        </div>
    </a>
  )
}

export default FeatureCard