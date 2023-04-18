import styled from "styled-components";

export const Name = styled.h2`
margin-top: 8px;
margin-bottom: 12px;
`

export const RecipeInfo = styled.div`
display: flex;
gap: 4px;
`


export const InfoBlock = styled.div`
display: flex;
align-items: center;
gap: 4px;
`

export const BadgeList = styled.div`
display: flex;
gap: 8px;
`

export const Badge = styled.span`
padding: 8px 12px;
border-radius: ${p => p.theme.radii.sm};
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => {

    if(!p.active){
        return p.theme.colors.white
    }

    switch(p.type){
        case 'easy':
            return 'green';
        case 'medium':
            return 'orange'
        case 'hard':
            return 'blue';
            
        default:
throw new Error (`Unknown budge type ${p.type}`)            

    }
   
}};

color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.black
}

}
`;


// export const Badge = styled.span`
// padding: 8px 12px;
// border-radius: ${p => p.theme.radii.sm};
// border: 1px solid ${p => p.theme.colors.black};
// background-color: ${p => {
//     return p.active ? p.theme.colors.accent : p.theme.colors.white
// }};

// color: ${p => {
//     return p.active ? p.theme.colors.white : p.theme.colors.black
// }

// }
// `;

export const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
`;