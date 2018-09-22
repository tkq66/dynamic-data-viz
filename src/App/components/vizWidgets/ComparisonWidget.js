import React, {Component} from 'react'
import SimpleListMenu from './SimpleMenuList'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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

  const fromOptions = [
    "1 day",
    "2 day",
    "3 day"
  ]
  
  const toOptions = [
    "2 day",
    "3 day",
    "4 day"
  ]

class ComparisonWidget extends Component {

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
                            <SimpleListMenu options={fromOptions} text="Start"/>
                            <Button>And</Button>
                            <SimpleListMenu options={toOptions} text="End"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ComparisonWidget);