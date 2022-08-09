import React from 'react'
import { Linking } from 'react-native'
import { Text, Center, HStack, ScrollView, Box, Image, VStack } from 'native-base'
import { Banner } from '../../components/Banner'
import { useColors } from '../../utils/hooks/useColors'
import { LINKED_IN, TWITTER, INSTAGRAM, BLOG, GITHUB, INSPIRED_BY, WEB } from '../../_config'
import { SocialMediaProps } from './social-media'

import { SocialMedia } from './social-media'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const About = () => {
  const socialMedia: Array<SocialMediaProps> = [
    {
      url: WEB,
      value: 'Personal site',
      icon: 'ios-laptop-outline',
    },
    {
      url: GITHUB,
      value: 'GitHub',
      icon: 'ios-logo-github',
    },
    {
      url: LINKED_IN,
      value: 'Linked In',
      icon: 'ios-logo-linkedin',
    },
    {
      url: TWITTER,
      value: 'Twitter',
      icon: 'ios-logo-twitter',
    },
    {
      url: INSTAGRAM,
      value: 'Instagram',
      icon: 'ios-logo-instagram',
    },
  ]
  const { containerColors } = useColors()
  const openTakuyaChannel = () => {
    Linking.openURL(INSPIRED_BY)
  }

  return (
    <VStack flex={1}>
      <Banner
        image={
          <Image
            alt="banner-image"
            source={require('../../assets/banner-about.png')}
            style={{ height: 400, width: 400, resizeMode: 'contain', marginTop: 48, marginRight: 24 }}
          />
        }
      />
      <VStack bg={containerColors} borderTopRadius={24} width={'100%'} mt={'-90px'} flex={1} p={'30px'}>
        <ScrollView>
          <HStack alignItems={'center'} justifyContent="flex-start" pt={2}>
            <Image
              alt="M. Rizki Aiman"
              source={require('../../assets/mrizkiaiman.jpg')}
              width={90}
              height={90}
              borderRadius={100}
            />
            <Box pr={18} pl={6} width={200}>
              <Text fontWeight={'bold'} fontSize={18}>
                M. Rizki Aiman
              </Text>
              <Text fontWeight={'semibold'} fontSize={12}>{`Software Engineer & Notion Creator`}</Text>
            </Box>
          </HStack>

          <VStack pt={4}>
            {socialMedia.map((item: SocialMediaProps, index: number) => (
              <SocialMedia {...item} key={item.url} />
            ))}
            <Text fontWeight={'bold'} fontSize={16} pt={4}>
              Disclaimer
            </Text>
            <Text textAlign={'justify'} pt={2} width={'95%'}>
              This app is inspired and a replica of one of devaslife's (or known as Takuya) YouTube tutorial. I really
              recommend to watch his videos for learning purpose. It's hands down one of the highest quality Dev YouTube
              Channel I've ever encountered.
            </Text>
            <Text py={4}>
              Visit his YouTube channel{' '}
              <Text onPress={openTakuyaChannel} fontWeight="bold" color="cyan.900">
                here.
              </Text>
            </Text>
          </VStack>
        </ScrollView>
      </VStack>
    </VStack>
  )
}
