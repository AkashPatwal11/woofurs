import { Flex, Link } from '@chakra-ui/layout';
import Btn from '@components/Btn';
import React from 'react';

function ContainerButtons({ data }) {
    return (
        <Flex
            gridGap="20px"
            flexDirection={['row', 'row', 'row', 'row', 'row']}
            flexWrap="wrap"
            mb={['44px','44px','44px','0px','0px']}
            mt="50px"
            mx={['auto','auto','auto','0px','0px']}
            justifyContent={['center','center','center','flex-start','flex-start']}
        >
            {
                data.map(e => 
                <Link target="_blank" key={e.id} href={e.url}>
                    <Btn
                        py={'22px'}
                        txt={'uppercase'}
                        fSize={['12px', '12px', '12px', '14px', '14px']}
                        letterSpacing={'1.2px'}
                        title={e.title}
                        borderTopStartRadius={'none'}
                        change={true}
                        colorHover={'#ed6436'}
                        color={'white'}
                        width={['140px', '140px', '140px', '164px', '164px', '164px']}
                        gap={'12px'}
                        fw={'700'}
                        alignSelf={['center', 'center', 'center', 'flex-start', 'flex-start']}
                    />
                </Link>)
            }
        </Flex>
    );
}

export default ContainerButtons;