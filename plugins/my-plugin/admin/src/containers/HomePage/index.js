/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import { Padded } from '@buffetjs/core';
import ListOfImages from '../../components/ListOfImages.js'

const HomePage = () => 
{
  return (
    <>
      <Padded
        top
        bottom
        right
        left
        size="md"
      >
        <ListOfImages />
      </Padded>
    </>
  );
};

export default memo(HomePage);
