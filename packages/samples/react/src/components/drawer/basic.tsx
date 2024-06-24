import type { FC } from 'react';
import React, { useRef, useContext } from 'react';

import { HideMenusContext } from '../../shares/HideMenusContext';
import { KolDrawer, KolButton, KolBadge } from '@public-ui/react';
import { SampleDescription } from '../SampleDescription';

export const DrawerBasic: FC = () => {
	const hideMenus = useContext(HideMenusContext);
	const drawerElement = useRef<HTMLKolDrawerElement>(null);
	const drawerModalElement = useRef<HTMLKolDrawerElement>(null);
	return (
		<>
			{!hideMenus && <KolBadge className="block mb-3" _label="Component is a DRAFT - Don't use in production yet." _color="#db5461" />}
			<SampleDescription>
				<p>
					Hier ist ein Beispiel für ein Drawer. Dieser lässt sich öffnen und schließen mit Methoden. Dadurch erscheint ein Dialog mit Text und &apos;Schließen&apos;
					Button. Durch anklicken des &apos;Schließen&apos; Button, schließt sich der Dialog wieder. Zusätzlich lässt sich der Dialog als Modal (_modal) durch ESC schließen.
					Beide Varianten können über das Attribut _align links, oben, rechts oder unten ausgerichtet werden.
				</p>
			</SampleDescription>
			<div className="flex flex-wrap gap-4">
				<KolDrawer ref={drawerElement} _label="Ich bin ein Drawer" _align="top" _on={{ onClose: () => console.log('Drawer onClose triggered!') }}>
					<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
					<KolButton _label="Close drawer" _on={{ onClick: () => drawerElement.current?.close() }} />
				</KolDrawer>
				<KolButton _label="Open drawer" _on={{ onClick: () => drawerElement.current?.open() }} />
				<KolDrawer ref={drawerModalElement} _modal _label="Ich bin ein Drawer Modal" _on={{ onClose: () => console.log('Drawer Modal onClose triggered!') }}>
					<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
					<KolButton _label="Close drawer modal" _on={{ onClick: () => drawerModalElement.current?.close() }} />
				</KolDrawer>
				<KolButton _label="Open drawer as modal" _on={{ onClick: () => drawerModalElement.current?.open() }} />
			</div>
		</>
	);
};
