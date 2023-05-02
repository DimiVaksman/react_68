import PropTypes from 'prop-types';
import { HiTrash, HiZoomIn } from 'react-icons/hi';
import { TfiAlarmClock, TfiBarChartAlt, TfiPieChart } from 'react-icons/tfi';
import {
  RecipeInfo,
  InfoBlock,
  Name,
  BadgeList,
  Badge,
  Actions,
} from './RecipeCard.styled';
import { RecipeDifficulty } from 'constants';
import { useState } from 'react';
import { ImgModal } from '../Imgmodal/imgmodal';

export const RecipeCard = ({item: { id, image, name, time, servings, calories, difficulty }, onDelete}) => {
    
    const [selectedImg, setSelectedImg] = useState(null)

    return (
        <div>
          <img src={image} alt={name} width="240" />
          <Name>{name}</Name>
          <RecipeInfo>
            <InfoBlock>
              <TfiAlarmClock size="24" />
              <span>{time} min</span>
            </InfoBlock>
            <InfoBlock>
              <TfiPieChart size="24" />
              <span>{servings} servings</span>
            </InfoBlock>
            <InfoBlock>
              <TfiBarChartAlt size="24" />
              <span>{calories} calories</span>
            </InfoBlock>
          </RecipeInfo>
  
          <div>
            <h3>Difficulty</h3>
            <BadgeList>
              <Badge active={difficulty === RecipeDifficulty.easy} type="easy">
                Easy
              </Badge>
              <Badge
                active={difficulty === RecipeDifficulty.medium}
                type="medium"
              >
                Medium
              </Badge>
              <Badge active={difficulty === RecipeDifficulty.hard} type="hard">
                Hard
              </Badge>
            </BadgeList>
          </div>
          <div>
            <button aria-label="Delete" onClick={() => onDelete(id)}>
              <HiTrash />
            </button>
            <button aria-label="Zoom" onClick={() => setSelectedImg(image)}>
              <HiZoomIn />
            </button>
          </div>
          <ImgModal
            isOpen={selectedImg !== null}
            OnClose={() => setSelectedImg(null)}
            image={selectedImg}
          />
        </div>
      );
}

RecipeCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};


RecipeCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
      }).isRequired,
    
}