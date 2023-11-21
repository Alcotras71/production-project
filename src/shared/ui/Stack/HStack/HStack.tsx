import { memo } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction' | 'ref'>;
export const HStack = memo((props: HStackProps) => {
    return <Flex direction="row" {...props} />;
});
