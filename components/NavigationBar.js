import {
    Button,
    AppBar,
    Toolbar,
    Divider
} from "@material-ui/core";
import styles from "./NavigationBar.module.css"
import {
    linkDoc,
    linkHome,
    linkLogin,
    linkPlatform,
    linkPricing
} from "../conf/Conf";

export default function NavigationBar() {
    return (
        <AppBar position="static">
            <Toolbar className={styles.bar}>
                <div className={styles.title}>
                    <Button color="inherit" href={linkHome}>DataLbry</Button>
                </div>
                <Button color="inherit" href={linkPlatform}>Platform</Button>
                <Button color="inherit" href={linkPricing}>Pricing</Button>
                <Button color="inherit" href={linkDoc}>Docs</Button>
                <Button color="inherit" href={linkLogin}>Login</Button>
            </Toolbar>
        </AppBar>
    )
}
