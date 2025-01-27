/**
 * @author Oswaldo Pacheco
 */
import {LinkTypeEnum} from '../enum/link-type.enum';

export class LinkResponse {
  public linkId!: string;
  public linkType!: LinkTypeEnum;
  public platform!: string;
  public userId!: string;
}
