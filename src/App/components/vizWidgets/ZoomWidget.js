import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'

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
                    <div className="menuList" style={menuStyle}>
                        <div className="value">{card.value}</div>
                        <div className="label">{card.label}</div>
                        <Checkbox />
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ZoomWidget);