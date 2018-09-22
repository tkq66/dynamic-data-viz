import React, {Component} from 'react'
import SimpleListMenu from './SimpleMenuList'
import { withStyles } from '@material-ui/core/styles'

const menuStyle = {
    display:'flex', 
    flexDirection:'row',
    marginLeft: '10%',
    padding: '20px'
}

const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  });

class ZoomWidget extends Component {

    render() {
        const {card} = this.props;
        let className = 'card';

        return (
            <div className={className}
                 ref={ref => this.cardRef = ref}
                 id={card.id}>
                <div className='card-inner ripple'>
                    <div className="information">
                        <div className="value">{card.value}</div>
                        <div className="label">{card.label}</div>
                        <div class="menuList" style={menuStyle}>
                            <SimpleListMenu />
                            <SimpleListMenu />
                            <SimpleListMenu />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ZoomWidget);