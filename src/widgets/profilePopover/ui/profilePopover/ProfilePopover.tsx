import { Div, Button, FormLayout, FormItem, Input, Checkbox } from "@vkontakte/vkui";
import { Popover } from "@vkontakte/vkui/dist/components/Popover/Popover";
import React, { Fragment, useState } from "react";
import { Icon36UserCircleOutline } from '@vkontakte/icons';
import { Logout } from "@/features/logout";

export const ProfilePopover = () => {
    const [shown, setShown] = useState(false);

    return (
        <Fragment>
            <Popover
                action="click"
                shown={shown}
                onShownChange={setShown}
                content={
                    <FormLayout>
                        <FormItem>
                            <Button
                                size="l"
                                mode="secondary"
                                stretched
                            >
                                Профиль
                            </Button>
                        </FormItem>
                        <FormItem>
                            <Logout />
                        </FormItem>
                    </FormLayout>
                }
            >
                {/* <Button style={{ margin: '20px 0 0 0' }}>Кликни</Button> */}

                <Icon36UserCircleOutline />
            </Popover>
        </Fragment>
    )
}