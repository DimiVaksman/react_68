import ContentLoader from "react-content-loader"

export const DogsSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="184" y="73" rx="2" ry="2" width="140" height="10" /> 
    <rect x="181" y="44" rx="2" ry="2" width="140" height="10" /> 
    <rect x="17" y="31" rx="2" ry="2" width="146" height="146" /> 
    <rect x="185" y="97" rx="0" ry="0" width="141" height="11" />
  </ContentLoader>
)


