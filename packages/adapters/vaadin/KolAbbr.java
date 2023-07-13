package de.itzbund.oss.kolibri.components;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;

/**
 * Die **Abbr**-Komponente implementiert den HTML-Tag `abbr`, wobei hier jedoch der Tooltip barrierefrei ist.
Der Tooltip für die Beschreibung wird bei Focus oder Hover der **Abbr**-Komponente angezeigt und vorgelesen.
 */

@Tag("kol-abbr")
@NpmPackage(value = "@public-ui/components", version = "1.6.0-rc.9")
@JsModule("@public-ui/components/dist/components/kol-abbr")
public class KolAbbr extends Component {
	/**
	 * Dieses Property gibt die Beschreibung oder Erläuterung der Abkürzung an.
	 *
	 * @param value String
	 */
	public void setTitle(final Optional<String> value) {
		getElement().setProperty("_title", value);
	}

	/**
	 * Dieses Property gibt die Beschreibung oder Erläuterung der Abkürzung an.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getTitle() {
		return getElement().getProperty("_title", null);
	}

	/**
	 * Gibt an, ob der Tooltip bevorzugt entweder oben, rechts, unten oder links angezeigt werden soll.
	 *
	 * @param value Optional<String>
	 */
	public void setTooltipAlign(final Optional<String> value) {
		getElement().setProperty("_tooltip-align", value);
	}

	/**
	 * Gibt an, ob der Tooltip bevorzugt entweder oben, rechts, unten oder links angezeigt werden soll.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getTooltipAlign() {
		return getElement().getProperty("_tooltip-align", null);
	}
}
