import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  extendTheme,
  Text,
  VStack,
  Input,
  Avatar,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        colorScheme: 'gray',
        color: '#718096',
      },
    },
  },
  fonts: {
    heading: 'YourCustomFont, sans-serif',
  },
});

interface Review {
  userName: string;
  userProfilePhoto: string;
  userRating: number;
  reviewContent: string;
}

function ReviewCard() {
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);

  const [userName, setUserName] = useState<string>('John Doe');
  const [userProfilePhoto, setUserProfilePhoto] = useState<string>(
    'https://example.com/profile.jpg'
  );

  const [userRating, setUserRating] = useState<number>(5);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleReviewSubmit = () => {
    if (newReview.trim() !== '') {
      const reviewWithUserInfo: Review = {
        userName,
        userProfilePhoto,
        userRating,
        reviewContent: newReview,
      };

      setReviews([...reviews, reviewWithUserInfo]);
      setNewReview('');
      setShowForm(false);
    }
  };

  return (
    <>
      <Flex align="center" justify="space-between" p={10} position="relative">
        <Box>
          <Heading as="h1" fontSize="4xl" ml="250px" fontFamily="heading">
            Popular Reviews
          </Heading>
        </Box>
        <Box ml="auto">
          <Button colorScheme="gray" size="lg" right={250} onClick={handleButtonClick}>
            Write A Review
          </Button>
        </Box>

        <Box
          position="absolute"
          bottom="0"
          left="225"
          width="70%"
          height="1px"
          backgroundColor="#ccc"
        />
      </Flex>

      {showForm && (
        <Box mt={4} width="50%" alignItems="center" ml={400}>
          <VStack spacing={2}>
            <Input
              placeholder="Write your review"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <Button colorScheme="gray" onClick={handleReviewSubmit}>
              Submit Review
            </Button>
          </VStack>
        </Box>
      )}

      {reviews.map((review, index) => (
        <Box key={index} mt={4} display="flex" alignItems="flex-start" ml={300}>
          <Avatar src={review.userProfilePhoto} name={review.userName} />

          <Box ml={4} p={4} borderRadius="md" backgroundColor="#EDF2F7">
            <Text fontWeight="600">
              {review.userName}{' '}
              {[...Array(review.userRating)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} color="gold" />
              ))}
            </Text>

            <Text mt={2} maxWidth="800px">
              {review.reviewContent}
            </Text>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default ReviewCard;
