import React from 'react';
import { SafeAreaView } from 'react-native';

import {
	Container,
	ContentHeader,
	ContentBody,
	ContentFooter,
	Title,
	Description,
	ViewButton
} from './style';
import ButtonSocial from '@components/ButtonSocial/ButtonSocial';

const screens: React.FC = () => {
	return (
		<SafeAreaView>
			<Container>
				<ContentHeader>
					<Title>Seja Bem Vindo(a) Wallet App</Title>
					<Description>sign up with</Description>
					<ViewButton>
						<ButtonSocial title={'Google'} />
					</ViewButton>
				</ContentHeader>
				<ContentBody></ContentBody>
				<ContentFooter></ContentFooter>
			</Container>
		</SafeAreaView>
	);
};

export default screens;
