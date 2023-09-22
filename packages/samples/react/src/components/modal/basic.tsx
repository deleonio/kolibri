import React, { FC, useRef } from 'react';

import { KolButton, KolCard, KolModal } from '@public-ui/react';

export const ModalBasic: FC = () => {
	const modalElement = useRef<HTMLKolModalElement>(null);

	return (
		<div>
			<KolModal _ariaLabel="" _width="80%" ref={modalElement}>
				<KolCard _heading="Ich bin ein Modal" style={{ width: '100%' }}>
					<div slot="content">
						<KolButton
							_label="Schließen"
							_on={{
								onClick: () => {
									if (modalElement?.current) {
										modalElement.current._activeElement = null;
									}
								},
							}}
						/>
					</div>
				</KolCard>
			</KolModal>
			<KolButton
				_label="Modal öffnen"
				_on={{
					onClick: (event: Event) => {
						if (modalElement?.current) {
							modalElement.current._activeElement = event.target as HTMLElement;
						}
					},
				}}
			/>
		</div>
	);
};
