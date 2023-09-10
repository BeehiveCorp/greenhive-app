import * as React from 'react';
import Svg, { Path, G, Defs, LinearGradient, Stop } from 'react-native-svg';
import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';

import Box from '../Box';

import { Container, LevelNumber } from './styles';

const Level = ({ size = 80, level = 1 }) => {
  const accent = chroma.mix('green', 'red', level / 100).hex();

  return (
    <Container style={{ width: size, height: size }}>
      <Svg width={size} height={size} fill="none" viewBox="0 0 80 80">
        <Path fill="url(#a)" d="m40 0 11.53 13.855H28.47L40 0Z" />
        <Path fill="url(#b)" d="M40 79.07 28.47 65.214h23.06L40 79.069Z" />
        <G filter="url(#c)">
          <Path
            fill="#fff"
            d="m39.684 3.542 1.336 4.17 4.062 1.372-4.062 1.371-1.336 4.17-1.335-4.17-4.062-1.371 4.062-1.372 1.335-4.17Z"
          />
          <Path
            stroke={chroma(accent).darken(3).hex()}
            strokeWidth={0.099}
            d="m39.683 3.672 1.3 4.057.006.02.018.005 3.95 1.334-3.95 1.335-.018.006-.006.019-1.3 4.057-1.3-4.057-.006-.02-.018-.006-3.95-1.334 3.95-1.334.018-.006.006-.019 1.3-4.057Z"
          />
        </G>
        <Path
          fill="url(#d)"
          d="m73.343 59.302-17.45 3.325 11.53-20.505 5.92 17.18Z"
        />
        <Path
          fill="url(#e)"
          d="m6.654 19.764 17.45-3.325-11.529 20.504-5.92-17.18Z"
        />
        <Path
          fill="url(#f)"
          d="m73.343 19.764-5.92 17.18-11.53-20.506 17.45 3.326Z"
        />
        <Path
          fill="url(#g)"
          d="m6.656 59.302 5.921-17.18 11.53 20.505-17.45-3.325Z"
        />
        <Path
          fill="url(#h)"
          stroke="url(#i)"
          strokeWidth={0.497}
          d="M69.675 39.167c0 16.621-13.123 30.098-29.315 30.098-16.191 0-29.315-13.477-29.315-30.098 0-16.622 13.124-30.099 29.315-30.099 16.192 0 29.315 13.477 29.315 30.099Z"
        />
        <G filter="url(#j)">
          <Path
            fill="url(#k)"
            d="M40.357 65.773c14.308 0 25.907-11.91 25.907-26.6 0-14.692-11.6-26.602-25.907-26.602-14.309 0-25.908 11.91-25.908 26.601 0 14.692 11.6 26.601 25.908 26.601Z"
          />
        </G>
        <G filter="url(#l)">
          <Path
            fill="url(#m)"
            d="M40.355 61.34c11.924 0 21.59-9.924 21.59-22.167 0-12.242-9.666-22.167-21.59-22.167-11.923 0-21.59 9.925-21.59 22.167 0 12.243 9.667 22.168 21.59 22.168Z"
          />
        </G>
        <Path
          fill="#fff"
          d="m28.845 19.954.534 1.668 1.624.549-1.624.549-.535 1.668-.534-1.669-1.624-.548 1.624-.549.535-1.668ZM22.37 12.565l1.246 3.893 3.791 1.28-3.79 1.28-1.247 3.892-1.247-3.892-3.791-1.28 3.79-1.28 1.248-3.893Z"
        />
        <Defs>
          <LinearGradient
            id="a"
            x1={35.208}
            x2={44.793}
            y1={5.542}
            y2={5.542}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset={0.489} stopColor={chroma(accent).brighten(3).hex()} />
            <Stop offset={0.489} stopColor={chroma(accent).brighten(4).hex()} />
            <Stop offset={0.489} stopColor={chroma(accent).brighten(5).hex()} />
          </LinearGradient>
          <LinearGradient
            id="b"
            x1={44.793}
            x2={35.208}
            y1={73.527}
            y2={73.527}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset={0.489} stopColor={chroma(accent).brighten(3).hex()} />
            <Stop offset={0.489} stopColor={chroma(accent).brighten(4).hex()} />
            <Stop offset={0.489} stopColor={chroma(accent).brighten(5).hex()} />
          </LinearGradient>
          <LinearGradient
            id="d"
            x1={71.066}
            x2={66.08}
            y1={52.269}
            y2={60.679}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset={0.489} stopColor={chroma(accent).brighten(3).hex()} />
            <Stop offset={0.489} stopColor={chroma(accent).brighten(4).hex()} />
            <Stop offset={0.489} stopColor={chroma(accent).brighten(5).hex()} />
          </LinearGradient>
          <LinearGradient
            id="e"
            x1={8.932}
            x2={13.917}
            y1={26.796}
            y2={18.387}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset={0.489} stopColor={chroma(accent).brighten(3).hex()} />
            <Stop offset={0.489} stopColor={chroma(accent).brighten(4).hex()} />
            <Stop offset={0.489} stopColor={chroma(accent).brighten(5).hex()} />
          </LinearGradient>
          <LinearGradient
            id="f"
            x1={66.272}
            x2={71.258}
            y1={18.273}
            y2={26.682}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset={0.489} stopColor={chroma(accent).brighten(3).hex()} />
            <Stop offset={0.489} stopColor={chroma(accent).brighten(4).hex()} />
            <Stop offset={0.489} stopColor={chroma(accent).brighten(5).hex()} />
          </LinearGradient>
          <LinearGradient
            id="g"
            x1={13.727}
            x2={8.742}
            y1={60.793}
            y2={52.383}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset={0.489} stopColor={chroma(accent).brighten(3).hex()} />
            <Stop offset={0.489} stopColor={chroma(accent).brighten(4).hex()} />
            <Stop offset={0.489} stopColor={chroma(accent).brighten(5).hex()} />
          </LinearGradient>
          <LinearGradient
            id="h"
            x1={21.446}
            x2={61.943}
            y1={16.639}
            y2={60.631}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#D5E3FF" />
            <Stop offset={0.521} stopColor="#F0FFF6" />
            <Stop offset={1} stopColor={chroma(accent).brighten(5).hex()} />
          </LinearGradient>
          <LinearGradient
            id="i"
            x1={40.36}
            x2={40.36}
            y1={8.871}
            y2={69.462}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#fff" stopOpacity={0.5} />
            <Stop offset={1} stopColor="#fff" stopOpacity={0} />
          </LinearGradient>
          <LinearGradient
            id="k"
            x1={23.805}
            x2={57.951}
            y1={18.852}
            y2={58.975}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor={chroma(accent).brighten(1).hex()} />
            <Stop offset={1} stopColor="#D5FFEB" />
          </LinearGradient>
          <LinearGradient
            id="m"
            x1={26.068}
            x2={44.642}
            y1={20.918}
            y2={60.973}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor={chroma(accent).darken(1).hex()} />
            <Stop offset={0.552} stopColor={accent} />
            <Stop offset={1} stopColor={chroma(accent).darken(3).hex()} />
          </LinearGradient>
        </Defs>
      </Svg>

      <Box
        style={StyleSheet.absoluteFillObject}
        alignItemsCenter
        justifyContentCenter
      >
        <LevelNumber>{level}</LevelNumber>
      </Box>
    </Container>
  );
};

export default Level;
