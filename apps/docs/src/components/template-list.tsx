import { templates } from "../utils/template";

function TemplateList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Framework</th>
          <th>Variant</th>
          <th>Style</th>
          <th>ORM</th>
          <th>Database</th>
        </tr>
      </thead>
      <tbody>
        {templates.map((template) => {
          return (
            <tr key={template.name}>
              <td>{template.tag}</td>
              <td>
                <ul className="list-none">
                  {template.variant.map((variant) => {
                    return (
                      <li key={variant.name}>
                        <span>{variant.tag}</span>
                      </li>
                    );
                  })}
                </ul>
              </td>
              <td>
                <ul className="list-none">
                  {template.style ? (
                    template.style.map((style) => {
                      return (
                        <li key={style.name}>
                          <span>{style.name}</span>
                        </li>
                      );
                    })
                  ) : (
                    <li className="font-thin opacity-50">No style</li>
                  )}
                </ul>
              </td>
              <td>
                <ul className="list-none">
                  {template.database ? (
                    template.database.orm.map((orm) => {
                      return (
                        <li key={orm}>
                          <span>{orm}</span>
                        </li>
                      );
                    })
                  ) : (
                    <li className="font-thin opacity-50">No ORM</li>
                  )}
                </ul>
              </td>
              <td>
                <ul className="list-none">
                  {template.database ? (
                    template.database.database.map((database) => {
                      return (
                        <li key={database}>
                          <span>{database}</span>
                        </li>
                      );
                    })
                  ) : (
                    <li className="font-thin opacity-50">No database</li>
                  )}
                </ul>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TemplateList;
