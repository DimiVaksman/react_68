import PropTypes from "prop-types"
import { TfiAlarmClock,TfiBarChartAlt,TfiPieChart } from "react-icons/tfi";
import {RecipeInfo,InfoBlock, Name, BadgeList,Badge} from './RecipeCard.styled'
 import {RecipeDefficulty} from 'constants'
export const RecipeCard = ({
    item:{image,name,time,servings,calories,difficulty}}) => {
return (<div>
    <img src={image} alt={name} width="240" />
    <Name>{name}</Name>
    <RecipeInfo>
        <InfoBlock>
        <TfiAlarmClock size="24"/>
            <span>{time} min</span>
        </InfoBlock>
        <InfoBlock>
        <TfiPieChart size='24'/>
            <span>{servings} servings</span>
        </InfoBlock>
        <InfoBlock>
        <TfiBarChartAlt size='24'/>
            <span>{calories} calories</span>
        </InfoBlock>
    </RecipeInfo>

    <div>
        <h3>Difficulty</h3>
        <BadgeList>
            <Badge active={difficulty === RecipeDefficulty.easy} type='easy'>Easy</Badge>
            <Badge active={difficulty === RecipeDefficulty.medium} type='medium'>Medium</Badge>
            <Badge active={difficulty === RecipeDefficulty.hard} type='hard'>Hard</Badge>
        </BadgeList>
    </div>
</div>)
}

RecipeCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired
    }).isRequired
}