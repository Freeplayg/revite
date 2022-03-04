import { Role } from "revolt-api/types/Servers";

import Checkbox from "../../ui/Checkbox";

export type RoleOrDefault = (
    | Role
    | {
          name: string;
          permissions: number;
          colour?: string;
          hoist?: boolean;
          rank?: number;
      }
) & { id: string };

interface Props {
    selected: string;
    onSelect: (id: string) => void;

    roles: RoleOrDefault[];
}

export function RoleSelection({ selected, onSelect, roles }: Props) {
    return (
        <>
            {roles.map((x) => (
                <Checkbox
                    checked={x.id === selected}
                    onChange={() => onSelect(x.id)}>
                    {x.name}
                </Checkbox>
            ))}
        </>
    );
}